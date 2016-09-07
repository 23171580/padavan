/*
 *
 *   Authors:
 *    Lars Fenneberg		<lf@elemental.net>
 *
 *   This software is Copyright 1996,1997 by the above mentioned author(s),
 *   All Rights Reserved.
 *
 *   The license which is distributed with this software in the file COPYRIGHT
 *   applies to this software. If your distribution is missing this file, you
 *   may request it from <reubenhwk@gmail.com>.
 *
 */

#ifndef INCLUDES_H
#define INCLUDES_H

#include "config.h"

#include <string.h>
#include <stdio.h>
#include <stdarg.h>
#include <stdlib.h>
#include <stddef.h>
#include <stdint.h>
#include <time.h>
#include <syslog.h>
#include <unistd.h>
#include <errno.h>
#include <signal.h>
#include <netdb.h>
#include <pwd.h>
#include <grp.h>

#include <sys/types.h>
#ifdef HAVE_INTTYPES_H
#include <inttypes.h>
#endif

#ifdef HAVE_SYS_PARAM_H
#include <sys/param.h>
#else
#ifdef HAVE_MACHINE_PARAM_H
#include <machine/param.h>
#endif
#ifdef HAVE_MACHINE_LIMITS_H
#include <machine/limits.h>
#endif
#endif

#if TIME_WITH_SYS_TIME
#include <sys/time.h>
#include <time.h>
#else
#if HAVE_SYS_TIME_H
#include <sys/time.h>
#else
#include <time.h>
#endif
#endif

#include <sys/ioctl.h>
#include <sys/socket.h>
#include <sys/time.h>
#include <sys/uio.h>

#include <sys/stat.h>
#include <fcntl.h>

#include <netinet/in.h>

#include <netinet/ip6.h>
#include <netinet/icmp6.h>

#include <arpa/inet.h>

#ifdef HAVE_SYS_SYSCTL_H
#include <sys/sysctl.h>
#endif

#include <net/if.h>

#ifdef HAVE_NET_IF_DL_H
#include <net/if_dl.h>
#endif
#ifdef HAVE_NET_IF_TYPES_H
#include <net/if_types.h>
#endif
#if defined(HAVE_NET_IF_ARP_H) && !defined(ARPHRD_ETHER)
#include <net/if_arp.h>
#endif				/* defined(HAVE_NET_IF_ARP_H) && !defined(ARPHRD_ETHER) */

#ifdef HAVE_SYS_SOCKIO_H
#include <sys/sockio.h>
#endif

#ifdef HAVE_GETOPT_H
#include <getopt.h>
#endif

#ifdef HAVE_IFADDRS_H
#include <ifaddrs.h>
#endif

/* Uclibc : include/netinet/icmpv6.h - Added by Bhadram*/
#define ND_OPT_ARO	33
#define ND_OPT_6CO	34
#define ND_OPT_ABRO	35

struct nd_opt_abro {
	uint8_t nd_opt_abro_type;
	uint8_t nd_opt_abro_len;
	uint16_t nd_opt_abro_ver_low;
	uint16_t nd_opt_abro_ver_high;
	uint16_t nd_opt_abro_valid_lifetime;
	struct in6_addr nd_opt_abro_6lbr_address;
};

struct nd_opt_6co {
	uint8_t nd_opt_6co_type;
	uint8_t nd_opt_6co_len;
	uint8_t nd_opt_6co_context_len;
	uint8_t nd_opt_6co_res:3;
	uint8_t nd_opt_6co_c:1;
	uint8_t nd_opt_6co_cid:4;
	uint16_t nd_opt_6co_reserved;
	uint16_t nd_opt_6co_valid_lifetime;
	struct in6_addr nd_opt_6co_con_prefix;
};				/*Added by Bhadram */

#endif				/* INCLUDES_H */
