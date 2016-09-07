# Default to disabling device-mapper and SELinux
%define use_devmapper 0
%define use_selinux 0
%define use_sepol 0

# Enable device-mapper support if we find devmapper
%define use_devmapper %(pkg-config --libs devmapper >/dev/null 2>&1; [ $? -eq 0 ] && echo 1)

# Enable SELinux if we find libselinux and libsepol
%define use_selinux %([ -r %{_libdir}/libselinux.a ] && echo 1)
%define use_sepol %([ -r %{_libdir}/libsepol.so ] && echo 1)

Summary:   The GNU disk partition manipulation program
Name:      parted
Version:   3.0.97-9f5a7
Release:   1
Source:    ftp://ftp.gnu.org/gnu/%{name}/%{name}-%{version}.tar.bz2
Buildroot: %{_tmppath}/%{name}-%{version}-%{release}-root-%(%{__id_u} -n)
License:   GPL
Group:     Applications/System

BuildRequires: e2fsprogs-devel readline-devel ncurses-devel gperf
BuildRequires: automake libtool gettext-devel texinfo pkgconfig

BuildRequires: device-mapper-devel, libselinux-devel libsepol-devel

Prereq: /sbin/install-info

%description
The GNU Parted program allows you to create, destroy, resize, move,
and copy hard disk partitions. Parted can be used for creating space
for new operating systems, reorganizing disk usage, and copying data
to new hard disks.

%package devel
Summary:  Files for developing apps which will manipulate disk partitions
Group:    Development/Libraries
Requires: %{name}-%{version}-%{release}
%description devel
The GNU Parted library is a set of routines for hard disk partition
manipulation. If you want to develop programs that manipulate disk
partitions and filesystems using the routines provided by the GNU
Parted library, you need to install this package.

%prep
%setup -q

%build
%configure \
   --enable-shared \
%if "%{use_devmapper}" == "1"
   --enable-device-mapper \
%else
   --disable-devmapper \
%endif
%if "%{use_selinux}" == "1" && "%{use_sepol}" == "1"
   --enable-selinux \
%else
   --disable-selinux \
%endif
   --enable-part-static \
   --enable-pc98=no \
   --enable-Werror=no \
   --disable-dynamic-loading
%{__make} %{?_smp_mflags}

%install
%{__rm} -rf %{buildroot}
%{__make} install DESTDIR=%{buildroot}

%clean
%{__rm} -rf %{buildroot}

%post -p /sbin/ldconfig

%postun -p /sbin/ldconfig

%files
%defattr(-,root,root,-)
%doc AUTHORS BUGS COPYING ChangeLog NEWS README THANKS TODO doc/API doc/FAT
%{_sbindir}/parted
%{_sbindir}/partprobe
%{_mandir}/man8/parted.8.gz
%{_mandir}/man8/partprobe.8.gz
%{_libdir}/libparted-*.so.*
%{_libdir}/libparted-*.so.*
%{_infodir}/parted.info.gz

%files devel
%defattr(-,root,root,-)
%{_includedir}/parted
%{_libdir}/libparted.a
%{_libdir}/libparted.so
%{_libdir}/pkgconfig/libparted.pc

%changelog
* Tue Mar 13 2007 David Cantrell <dcantrell@redhat.com>
- Updated spec file

* Mon Mar 13 2000 Fabian Emmes <fab@orlen.de>
- changed "unset LINGUAS" line
- reintroduced %build section ;)
- started changelog
