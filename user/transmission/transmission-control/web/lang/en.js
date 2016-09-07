// lang file
system.defaultLang = {
	"name":"en"
	,"system":{
		"title":"Transmission WEB Control"
		,"status":{
			"connect":"Connecting..."
			,"connected":"Connected"
			,"queue":"Queue:"
			,"queuefinish":"The queue(s) has finished."
			,"notfinal":"Not finalized"
		}
	}
	,"error":{
		"data-error":"Error recieving data!"
		,"data-post-error":"Error posting data!"
		,"rename-error":"Error renaming file/folder!"
	}
	,"config":{
		"save-path":"Download directory"
	}
	,"toolbar":{
		"start":"Start"
		,"pause":"Pause"
		,"recheck":"Recheck"
		,"start-all":"Start all"
		,"pause-all":"Pause all"
		,"remove":"Remove"
		,"remove-all":"Remove all"
		,"remove-data":"Remove data"
		,"add-torrent":"Add Torrent"
		,"attribute":"Attribute"
		,"alt-speed":"Alt-Speed"
		,"system-config":"Config"
		,"system-reload":"Reload"
		,"about":"About"
		,"reload-time":"Auto Reload:"
		,"reload-time-unit":"s/time"
		,"autoreload-disabled":"Disabled"
		,"autoreload-enabled":"Enabled"
		,"search-prompt":"Search Local Torrents"
		,"tracker-replace":"Replace trackers"
		,"queue":"Queue"
		,"ui-mobile":"Mobile UI"
		,"ui-original":"Original UI"
		,"ui-computer":"Desktop UI"
		,"plugin":"Extensions/plugins"
		,"rename":"Rename"
		,"tip":{
			"start":"Start the checked torrents"
			,"pause":"Pause the checked torrents"
			,"recheck":"Recheck the checked torrents"
			,"recheck-confirm":"Are you sure you want to re-check the selected torrents? This may take some time!"
			,"start-all":"Start all"
			,"pause-all":"Pause all"
			,"remove":"Remove"
			,"delete-all":"Delete-all"
			,"delete-data":"Delete-data"
			,"add-torrent":"Add torrent(s)"
			,"attribute":"Attribute"
			,"alt-speed":"Alt-speed"
			,"system-config":"Config"
			,"system-reload":"Reload"
			,"about":"About this app"
			,"autoreload-disabled":"Auto reload is disabled"
			,"autoreload-enabled":"Auto reload is enabled"
			,"tracker-replace":"Replace trackers"
			,"change-download-dir":"Change download location"
			,"ui-mobile":"Mobile UI"
			,"ui-original":"Original UI"
			,"more-peers":"Ask tracker for more peers"
			,"rename":"Renaming a Torrent's Path"
		}
	}
	,"menus":{
		"queue":{
			"move-top":"Move to top"
			,"move-up":"Move up"
			,"move-down":"Move down"
			,"move-bottom":"Move to bottom"
		}
		,"plugin": {
			"auto-match-data-folder": "Automatically matches data directory"
		}
	}
	,"title":{
		"left":"Navigation"
		,"list":"Torrents"
		,"attribute":"Attribute"
		,"status":"Status"
	}
	,"tree":{
		"all":"All"
		,"active":"Active"
		,"paused":"Paused"
		,"downloading":"Downloading"
		,"sending":"Seeding"
		,"error":"Error"
		,"warning":"Warning"
		,"actively":"Actively"
		,"check":"Checking"
		,"wait":"Waiting"
		,"search-result":"Search Result"
		,"status":{
			"loading":"Loading..."
		}
		,"statistics":"Statistics"
		,"statistics":{
			"title":"Statistics"
			,"cumulative":"Cumulative"
			,"current":"Current"
			,"uploadedBytes":"UploadedBytes: "
			,"downloadedBytes":"DownloadedBytes: "
			,"filesAdded":"FilesAdded: "   
			,"sessionCount":"SessionCount: " 
			,"secondsActive":"SecondsActive: "
		}
		,"servers":"Trackers"
		,"folders":"Folders"
		,"toolbar":{
			"nav":{
				"folders":"Folders"
			}
		}
	}
	,"statusbar":{
		"downloadspeed":"Download speed:"
		,"uploadspeed":"Send speed:"
		,"version":"Version:"
	}
	,"dialog":{
		"torrent-add":{
			"download-dir":"Download Dir:"
			,"torrent-url":"Torrent URL:"
			,"tip-torrent-url":"Tip: Please add multiple content with an 'Enter' key press to separate"
			,"autostart":"Auto Start:"
			,"tip-autostart":""
			,"set-default-download-dir":"Set as default directory"
			,"upload-file":"Torrent file(s):"
			,"nosource":"No torrent file or URL."
			,"tip-title":"Uploading the torrent file takes precedence over the torrent URL"
		}
		,"system-config":{
			"title":"Server Config"
			,"tabs":{
				"base":"Base"
				,"network":"Network"
				,"limit":"Limit"
				,"alt-speed":"Scheduled"
				,"dictionary-folders":"Folders Dictionary"
			}
			,"config-dir":"Location of transmission's configuration directory:"
			,"download-dir":"Default path to download torrents:"
			,"download-dir-free-space":"Free space:"
			,"incomplete-dir-enabled":"Use incomplete directory"
			,"cache-size-mb":"Disk cache size:"
			,"rename-partial-files":"Append '.part' to incomplete files"
			,"start-added-torrents":"Auto start added torrents"
			,"download-queue-enabled":"Enabled download queue, max queue number:"
			,"seed-queue-enabled":"Enabled seed queue, max queue number:"
			,"peer-port-random-on-start":"Use random port on start"
			,"port-forwarding-enabled":"Enabled port forwarding (UPnP)"
			,"test-port":"Test the port"
			,"port-is-open-true":"The port is open"
			,"port-is-open-false":"The port is closed"
			,"testing":"Testing..."
			,"encryption":"Encryption:"
			,"encryption-type":{
				"required":"Required"
				,"preferred":"Preferred"
				,"tolerated":"Tolerated"
			}
			,"utp-enabled":"Enabled uTP"
			,"dht-enabled":"Enabled DHT"
			,"lpd-enabled":"Enabled LPD"
			,"pex-enabled":"Enabled PEX"
			,"peer-limit-global":"Maximum global number of peers:"
			,"peer-limit-per-torrent":"Maximum peers number of torrent:"
			,"speed-limit-down-enabled":"Max global download speed:"
			,"speed-limit-up-enabled":"Max global upload speed:"
			,"alt-speed-enabled":"Use the alt speeds"
			,"alt-speed-down":"Max global download speed:"
			,"alt-speed-up":"Max global upload speed:"
			,"alt-speed-time-enabled":"Use scheduled"
			,"alt-speed-time":"Time："
			,"weekday":{
				"1":"Monday"
				,"2":"Tuesday"
				,"3":"Wednesday"
				,"4":"Thursday"
				,"5":"Friday"
				,"6":"Saturday"
				,"0":"Sunday"
			}
			,"blocklist-enabled":"Use blocklist"
			,"blocklist-size":"Blocklist has %n rules."
			,"seedRatioLimited":"The default seed ratio for torrents to use:"
			,"queue-stalled-enabled":"Whether or not to consider idle torrents as stalled:"
			,"idle-seeding-limit-enabled":"Torrents we're seeding will be stopped if they're idle for this long:"
			,"minuets":"Minuets"
			,"nochange":"No change"
			,"saveing":"Saveing..."
		}
		,"public":{
			"button-ok":"OK"
			,"button-cancel":"Cancel"
			,"button-reload":"Reload"
			,"button-save":"Save"
			,"button-close":"Close"
			,"button-update":"Update"
			,"button-config":"Config"
		}
		,"about":{
			"infos":"Author: culturist<br/>Statement: Most of the icons used in this program from the network, if any violation of your rights, please contact me delete."
			,"check-update":"Check Update"
		}
		,"torrent-remove":{
			"title":"Remove confirm"
			,"confirm-text":"Are you sure you want to remove the checked torrent(s)?"
			,"remove-data":"Delete local data"
			,"remove-error":"Delete failed!"
		}
		,"torrent-changeDownloadDir":{
			"title":"Set new dir"
			,"old-download-dir":"Old dir:"
			,"new-download-dir":"New dir:"
			,"move-data":"Move from previous location (otherwise, search 'New dir')."
			,"set-error":"set error!"
			,"recheck-data":"Recheck data."
		}
		,"system-replaceTracker":{
			"title":"Replace Trackers"
			,"old-tracker":"Old tracker:"
			,"new-tracker":"New tracker:"
			,"tip":"This function will find <b>all torrents</b> Tracker."
			,"not-found":"Tracker is not found."
		}
		,"auto-match-data-folder":{
			"title":"Automatically matches data directory"
			,"torrent-count":"Torrent count:"
			,"folder-count":"Folder count:"
			,"dictionary":"Folders Dictionary"
			,"time-begin":"Begin time:"
			,"time-now":"Now:"
			,"status":"Status:"
			,"ignore":"Ignore"
			,"working-close-confirm":"Torrents are currently downloading, are sure you want to close Transmission?"
			,"time-interval":"Time interval (seconds):"
			,"work-mode-title":"Mode:"
			,"work-mode":{
				"1":"Individually matched by torrent"
				,"2":"Individually matched by folder"
			}
		}
		,"torrent-rename": {
			"title":"Renaming a Torrent's Path",
			"oldname": "Old",
			"newname": "New"
		}
	}
	,"torrent":{
		"fields":{
			"id":"#"
			,"name":"Name"
			,"hashString":"HASH"
			,"downloadDir":"Download Dir"
			,"totalSize":"Total size"
			,"status":"Status"
			,"percentDone":"Percent done"
			,"remainingTime":"Remaining time"
			,"addedDate":"Date added"
			,"completeSize":"Complete size"
			,"rateDownload":"Dowload Rate"
			,"rateUpload":"Upload rate"
			,"leecherCount":"Leecher"
			,"seederCount":"Seeder"
			,"uploadedEver":"Uploaded till date"
			,"uploadRatio":"Ratio"
			,"queuePosition":"Queue"
		}
		,"status-text":{
			"0":"Paused"
			,"1":"Wait check"
			,"2":"Checking"
			,"3":"Wait download"
			,"4":"Downloading"
			,"5":"Wait seed"
			,"6":"Seeding"
		}
		,"attribute":{
			"tabs":{
				"base":"Base"
				,"servers":"Trackers"
				,"files":"Files"
				,"users":"Peers"
				,"config":"Config"
			}
			,"files-fields":{
				"name":"Name"
				,"length":"Size"
				,"percentDone":"Percent done"
				,"bytesCompleted":"Complete size"
				,"wanted":"Wanted"
				,"priority":"Priority"
			}
			,"servers-fields":{
				"announce":"Announce"
				,"announceState":"Status"
				,"lastAnnounceResult":"Infos"
				,"lastAnnounceSucceeded":"Succeeded"
				,"lastAnnounceTime":"AnnounceTime"
				,"lastAnnounceTimedOut":"TimedOut"
				,"downloadCount":"Download count"
				,"nextAnnounceTime":"Next announce"
			}
			,"peers-fields":{
				"address":"IP address"
				,"clientName":"Client"
				,"flagStr":"Flag"
				,"progress":"Progress"
				,"rateToClient":"RateToClient"
				,"rateToPeer":"RateToPeer"
			}
			,"status":{
				"true":"True"
				,"false":"False"
			}
			,"priority":{
				"0":"Normal"
				,"1":"High"
				,"-1":"Low"
			}
			,"label":{
				"name":"Name:"
				,"addedDate":"Added date:"
				,"totalSize":"Total size:"
				,"completeSize":"Complete size:"
				,"leftUntilDone":"Left until done:"
				,"hashString":"HASH:"
				,"downloadDir":"Download dir:"
				,"status":"Status:"
				,"rateDownload":"Rate download:"
				,"rateUpload":"Rate upload:"
				,"leecherCount":"Leecher:"
				,"seederCount":"Seeder:"
				,"uploadedEver":"Uploaded ever:"
				,"uploadRatio":"Upload Ratio:"
				,"creator":"Creator:"
				,"dateCreated":"Date created:"
				,"comment":"Comment:"
				,"errorString":"Error string:"
				,"downloadLimited":"Max global download speed: "
				,"uploadLimited":"Max global upload speed: "
				,"peer-limit":"Maximum peers for this torrent: "
				,"seedRatioMode":"Seed ratio for torrents to use: "
				,"seedIdleMode":"Torrents we're seeding will be stopped if they're idle for this long: "
			}
			,"tip":{
				"button-allow":"Download checked file(s)"
				,"button-deny":"Skip checked file(s)"
				,"button-priority":"Set priority"
			}
			,"other":{
				"tracker-remove-confim":"Are you sure you want to remove this Tracker?"
			}
		}
	}
	,"torrent-head":{
		"buttons":{
			"autoExpandAttribute":"Auto expand attribute"
		}
	}
	,"public":{
		"text-unknown":"Unknown"
		,"text-drop-title":"Drag and drop the file in your browser to add to Transmission."
		,"text-saved":"Saved"
		,"text-nochange":"No change"
		,"text-info":"Infos"
		,"text-confirm":"Are you sure?"
		,"text-browsers-not-support-features":"The current browser does not support this feature!"
		,"text-download-update":"Download this update"
		,"text-have-update":"An update is available"
	}
};
