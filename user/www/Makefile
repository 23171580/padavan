ifndef ROOTDIR
ROOTDIR=../..
endif

ROMFS_DIR = $(ROOTDIR)/romfs

include $(ROOTDIR)/user/shared/boards.mk

PROJECT_HOME_URL="https:\/\/bitbucket.org\/padavan\/rt-n56u\/"
LABEL_COPYRIGHT_TEXT="© 2011-2016 Padavan \& N56U project community"

BOARD_PATTERN=s/ZVMODELVZ/$(CONFIG_FIRMWARE_PRODUCT_ID)/g
COPYR_PATTERN=s/ZVCOPYRVZ/$(LABEL_COPYRIGHT_TEXT)/g
DWURL_PATTERN=s/ZVDWURLVZ/$(PROJECT_HOME_URL)/g

WEBUI_NAME=n56u_ribbon_fixed

all:

romfs:
	echo "Make www romfs"
	rm -Rf $(ROMFS_DIR)/www
	cp -R $(WEBUI_NAME) $(ROMFS_DIR)/www
	rm -f $(ROMFS_DIR)/www/httpd_check.htm
	echo "ASUSTeK" > $(ROMFS_DIR)/www/httpd_check.htm
	cd $(ROMFS_DIR)/www && ln -sf /opt/share/www/custom custom
	cp dict/CN.header $(ROMFS_DIR)/www
ifeq ($(CONFIG_FIRMWARE_INCLUDE_LANG_EN),y)
	echo "LANG_EN=English" >> $(ROMFS_DIR)/www/CN.header
	cp dict/EN.dict $(ROMFS_DIR)/www
	sed $(BOARD_PATTERN) -i $(ROMFS_DIR)/www/EN.dict
	sed $(COPYR_PATTERN) -i $(ROMFS_DIR)/www/EN.dict
	sed $(DWURL_PATTERN) -i $(ROMFS_DIR)/www/EN.dict
endif

	cat $(ROMFS_DIR)/www/CN.header dict/CN.footer > $(ROMFS_DIR)/www/CN.dict
	sed $(BOARD_PATTERN) -i $(ROMFS_DIR)/www/CN.dict
	sed $(COPYR_PATTERN) -i $(ROMFS_DIR)/www/CN.dict
	sed $(DWURL_PATTERN) -i $(ROMFS_DIR)/www/CN.dict
	rm -f $(ROMFS_DIR)/www/CN.header
	rm -f $(ROMFS_DIR)/www/bootstrap/js/bootstrap.js
	rm -f $(ROMFS_DIR)/www/bootstrap/js/engage.itoggle.js
	rm -f $(ROMFS_DIR)/www/bootstrap/js/jquery.backgroundpos.min.js
	rm -f $(ROMFS_DIR)/www/bootstrap/js/jquery.easing.1.3.js
	rm -f $(ROMFS_DIR)/www/bootstrap/css/bootstrap.css
ifeq ($(BOARD_HAS_5G_RADIO),0)
	rm -f $(INSTALLDIR)/www/Advanced_ACL_Content.asp
	rm -f $(INSTALLDIR)/www/Advanced_WAdvanced_Content.asp
	rm -f $(INSTALLDIR)/www/Advanced_WGuest_Content.asp
	rm -f $(INSTALLDIR)/www/Advanced_Wireless_Content.asp
	rm -f $(INSTALLDIR)/www/Advanced_WMode_Content.asp
	rm -f $(INSTALLDIR)/www/Advanced_WSecurity_Content.asp
	rm -f $(INSTALLDIR)/www/Main_WStatus_Content.asp
	rm -f $(INSTALLDIR)/www/wireless.js
	rm -f $(INSTALLDIR)/www/wds_aplist.asp
	rm -f $(INSTALLDIR)/www/device-map/router.asp
endif
ifndef CONFIG_IPV6
	rm -f $(INSTALLDIR)/www/Advanced_IPv6_Content.asp
endif
ifndef CONFIG_ATA
	rm -f $(INSTALLDIR)/www/device-map/sata.asp
endif
ifndef CONFIG_USB_SUPPORT
	rm -f $(INSTALLDIR)/www/Advanced_Modem_others.asp
	rm -f $(INSTALLDIR)/www/Advanced_Printer_others.asp
	rm -f $(INSTALLDIR)/www/modem_isp.js
	rm -f $(INSTALLDIR)/www/device-map/modem.asp
	rm -f $(INSTALLDIR)/www/device-map/printer.asp
	rm -f $(INSTALLDIR)/www/device-map/hub.asp
endif
ifneq ($(STORAGE_ENABLED),y)
	rm -f $(INSTALLDIR)/www/Advanced_AiDisk_ftp.asp
	rm -f $(INSTALLDIR)/www/Advanced_AiDisk_others.asp
	rm -f $(INSTALLDIR)/www/Advanced_AiDisk_samba.asp
	rm -f $(INSTALLDIR)/www/aidisk.asp
	rm -f $(INSTALLDIR)/www/disk_folder_tree.js
	rm -f $(INSTALLDIR)/www/device-map/disk.asp
	rm -f $(INSTALLDIR)/www/device-map/safely_remove_disk.asp
	rm -rf $(INSTALLDIR)/www/aidisk
	rm -rf $(INSTALLDIR)/www/images/AiDisk
	rm -rf $(INSTALLDIR)/www/images/Tree
endif

clean:
	@echo "Clean www romfs"
