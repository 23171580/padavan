#!/bin/sh
# Ensure that an HFS partition in a dos table gets the right ID

# Copyright (C) 2010-2012 Free Software Foundation, Inc.

# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 3 of the License, or
# (at your option) any later version.

# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.

# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

. "${srcdir=.}/init.sh"; path_prepend_ ../parted

dev=loop-file
ss=$sector_size_
n_sectors=8000

dd if=/dev/null of=$dev bs=$ss seek=$n_sectors || framework_failure

# create a GPT partition table
parted -s $dev mklabel msdos \
  mkpart pri hfs  2048s 4095s \
  mkpart pri hfs+ 4096s 6143s > out 2>&1 || fail=1
# expect no output
compare /dev/null out || fail=1

# Extract the "type" byte of the first partition.
od -An -j450 -tx1 -N1 $dev  > out || fail=1
od -An -j466 -tx1 -N1 $dev >> out || fail=1
printf ' af\n af\n' > exp || fail=1
compare exp out || fail=1

Exit $fail
