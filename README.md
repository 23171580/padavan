# padavan
padavan-psg1218-k2(CN&&LEDs worked)
fix user/ipset compile error (Makefile):

    ( cd $(SRC_NAME) ; \
    +++	ls -l /usr/share/aclocal/pkg.m4 ; \
    +++	export ACLOCAL_PATH=/usr/share/aclocal ; \
	    ./autogen.sh ; \
	    PKG_CONFIG_PATH=$(STAGEDIR)/lib/pkgconfig \

add make.sh to save the compile logs;
update to padavan 2016-10-18 6f8655c commit;
edit www language makefile only left CN & EN;
add tip for support Chinese SSID;
编译可用的固件padavan-python-mini下;


链接: https://pan.baidu.com/s/1d1Z9LYTaxtn42deSIcIyWA 密码: 3886
