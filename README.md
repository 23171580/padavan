# padavan
padavan-psg1218-k2
fix user/ipset compile error (Makefile):

( cd $(SRC_NAME) ; \
+++	ls -l /usr/share/aclocal/pkg.m4 ; \
+++	export ACLOCAL_PATH=/usr/share/aclocal ; \
	./autogen.sh ; \
	PKG_CONFIG_PATH=$(STAGEDIR)/lib/pkgconfig \

add make.sh to save the compile logs;
