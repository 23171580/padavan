PYTHON_VERSION = 2.7
SRC_NAME = Python-$(PYTHON_VERSION).3
THISDIR = $(shell pwd)
LOCALARCH = $(shell arch)-linux
PATCH = Python-2.7.3-xcompile.patch
PATCH_PYTHON = python.h.patch

config_test:
	( if [ -f ./build_done ]; then \
		echo "build completed"; \
	else \
		make configure && make ultra ; \
	fi )

ultra:
	( if [ $(CONFIG_FIRMWARE_INCLUDE_PYTHON_SHARED) == y ]; then \
		touch $(THISDIR)/build_done ; \
	else \
		$(STRIP) $(THISDIR)/python/bin/python$(PYTHON_VERSION) ; \
		upx --all-methods $(THISDIR)/python/bin/python$(PYTHON_VERSION) ; \
		touch $(THISDIR)/build_done ; \
	fi )

clean:
	rm -rf $(SRC_NAME)
	rm -rf python
	rm -f build_done

configure:
	tar -jxvf $(SRC_NAME).tar.bz2
	cd $(SRC_NAME) && ./configure \
		CC=$(HOSTCC) \
		CXX=g++ \
		AR=ar \
		RANLIB=ranlib \
		--host=$(LOCALARCH) \
		--build=$(HOST_BUILD)
	cp $(THISDIR)/$(PATCH_PYTHON) $(THISDIR)/$(SRC_NAME)/
	cd $(THISDIR)/$(SRC_NAME) && patch -p1 < $(PATCH_PYTHON)
	cd $(SRC_NAME) && make python CFLAGS="-fno-strict-aliasing -g -O2 -DNDEBUG -g -fwrapv -O3 -Wall -Wstrict-prototypes" EXTRA_CFLAGS="-DPy_REF_DEBUG" CPPFLAGS="-I. -IInclude -I./Include" LDFLAGS="" CONFIG_ARGS="" LIBS="-lpthread -ldl  -lutil" LIBC=""
	mv $(THISDIR)/$(SRC_NAME)/python $(THISDIR)/$(SRC_NAME)/hotstpython
	mv $(THISDIR)/$(SRC_NAME)/Parser/pgen $(THISDIR)/$(SRC_NAME)/Parser/hostpgen
	cd $(SRC_NAME) && make distclean
	cp $(THISDIR)/$(PATCH) $(THISDIR)/$(SRC_NAME)/
	cd $(SRC_NAME) && patch -p1 < $(PATCH)
ifeq ("$(CONFIG_FIRMWARE_INCLUDE_PYTHON_SHARED)", "y")
	cd $(SRC_NAME) && ./configure \
	CC=$(CROSS_COMPILE)$(HOSTCC) \
	CXX=$(CROSS_COMPILE)g++ \
	AR=$(CROSS_COMPILE)ar \
	RANLIB=$(CROSS_COMPILE)ranlib \
	--enable-shared \
	--prefix=/usr \
	--host=$(HOST_TARGET) \
	--build=$(HOST_BUILD)
endif
ifeq ("$(CONFIG_FIRMWARE_INCLUDE_PYTHON_SHARED)", "")
	cd $(SRC_NAME) && ./configure \
	CC=$(CROSS_COMPILE)$(HOSTCC) \
	CXX=$(CROSS_COMPILE)g++ \
	AR=$(CROSS_COMPILE)ar \
	RANLIB=$(CROSS_COMPILE)ranlib \
	--prefix=/usr \
	--host=$(HOST_TARGET) \
	--build=$(HOST_BUILD)
endif
	cd $(SRC_NAME) && make HOSTPYTHON=$(THISDIR)/$(SRC_NAME)/hotstpython HOSTPYGEN=$(THISDIR)/$(SRC_NAME)/Parser/hostpgen BLDSHARED="$(CROSS_COMPILE)gcc -shared" CROSS_COMPILE=$(CROSS_COMPILE) CROSS_COMPILE_TARGET=yes HOSTARCH=$(HOST_TARGET) BUILDARCH=$(HOST_BUILD)
	cd $(SRC_NAME) && make install HOSTPYTHON=$(THISDIR)/$(SRC_NAME)/hotstpython BLDSHARED="$(CROSS_COMPILE)gcc -shared" CROSS_COMPILE=$(CROSS_COMPILE) CROSS_COMPILE_TARGET=yes prefix=$(THISDIR)/python

romfs:
ifeq ("$(CONFIG_FIRMWARE_INCLUDE_PYTHON)", "y")
	cp -rf $(THISDIR)/python/* $(INSTALLDIR)/usr
	echo "PYTHON YES"
endif
ifeq ("$(CONFIG_FIRMWARE_INCLUDE_PYTHON_MINI)", "y")
	mkdir -p $(INSTALLDIR)/usr/include/python$(PYTHON_VERSION)
	mkdir -p $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload
	mkdir -p $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/config
	cp -rf $(THISDIR)/python/bin/python$(PYTHON_VERSION) $(INSTALLDIR)/usr/bin/python$(PYTHON_VERSION)
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/__future__.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/__future__.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/_abcoll.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/_abcoll.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/abc.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/abc.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/codecs.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/codecs.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/compileall.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/compileall.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/ConfigParser.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/ConfigParser.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/copy.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/copy.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/copy_reg.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/copy_reg.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/dis.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/dis.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/encodings $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/encodings
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/fnmatch.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/fnmatch.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/genericpath.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/genericpath.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/getopt.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/getopt.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/glob.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/glob.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/hashlib.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/hashlib.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/inspect.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/inspect.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/array.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/array.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/binascii.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/binascii.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/cStringIO.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/cStringIO.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/fcntl.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/fcntl.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/grp.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/grp.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/itertools.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/itertools.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/math.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/math.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/_md5.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/_md5.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/operator.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/operator.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/_random.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/_random.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/select.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/select.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/_sha.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/_sha.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/_sha256.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/_sha256.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/_sha512.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/_sha512.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/_socket.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/_socket.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/strop.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/strop.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/_struct.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/_struct.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/syslog.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/syslog.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/time.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/time.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/unicodedata.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/unicodedata.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/linecache.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/linecache.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/md5.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/md5.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/new.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/new.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/opcode.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/opcode.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/optparse.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/optparse.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/os.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/os.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/pickle.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/pickle.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/pickle.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/pickle.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/pkgutil.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/pkgutil.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/popen2.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/popen2.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/posixpath.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/posixpath.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/py_compile.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/py_compile.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/random.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/random.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/repr.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/repr.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/re.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/re.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/sha.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/sha.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/site.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/site.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/socket.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/socket.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/sre_compile.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/sre_compile.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/sre_constants.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/sre_constants.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/sre_parse.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/sre_parse.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/sre.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/sre.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/stat.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/stat.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/StringIO.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/StringIO.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/stringprep.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/stringprep.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/string.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/string.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/struct.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/struct.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/subprocess.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/subprocess.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/tempfile.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/tempfile.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/textwrap.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/textwrap.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/tokenize.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/tokenize.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/token.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/token.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/traceback.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/traceback.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/types.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/types.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/UserDict.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/UserDict.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/warnings.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/warnings.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/weakref.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/weakref.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/_weakrefset.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/_weakrefset.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/config/Makefile $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/config/Makefile
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/sysconfig.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/sysconfig.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/functools.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/functools.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/_functools.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/_functools.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/collections.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/collections.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/_collections.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/_collections.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/keyword.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/keyword.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/heapq.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/heapq.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/_heapq.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/_heapq.so
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/bisect.py $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/bisect.py
	cp -rf $(THISDIR)/python/lib/python$(PYTHON_VERSION)/lib-dynload/_bisect.so $(INSTALLDIR)/usr/lib/python$(PYTHON_VERSION)/lib-dynload/_bisect.so
	cp -rf $(THISDIR)/python/include/python$(PYTHON_VERSION)/pyconfig.h $(INSTALLDIR)/usr/include/python$(PYTHON_VERSION)/pyconfig.h
	ln -sf python$(PYTHON_VERSION) $(INSTALLDIR)/usr/bin/python
	echo "PYTHON-MINI YES"
ifeq ("$(CONFIG_FIRMWARE_INCLUDE_PYTHON_SHARED)", "y")
	cp -rf $(THISDIR)/python/lib/libpython$(PYTHON_VERSION).so.1.0 $(INSTALLDIR)/usr/lib/libpython$(PYTHON_VERSION).so.1.0
	ln -sf libpython$(PYTHON_VERSION).so.1.0 $(INSTALLDIR)/usr/lib/libpython$(PYTHON_VERSION).so
	echo "PYTHON-MINI-SHARED INSTALLED"
else
	echo "PYTHON-MINI INSTALLED"
endif
endif

