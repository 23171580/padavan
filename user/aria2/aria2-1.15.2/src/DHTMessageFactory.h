/* <!-- copyright */
/*
 * aria2 - The high speed download utility
 *
 * Copyright (C) 2006 Tatsuhiro Tsujikawa
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
 *
 * In addition, as a special exception, the copyright holders give
 * permission to link the code of portions of this program with the
 * OpenSSL library under certain conditions as described in each
 * individual source file, and distribute linked combinations
 * including the two.
 * You must obey the GNU General Public License in all respects
 * for all of the code used other than OpenSSL.  If you modify
 * file(s) with this exception, you may extend this exception to your
 * version of the file(s), but you are not obligated to do so.  If you
 * do not wish to do so, delete this exception statement from your
 * version.  If you delete this exception statement from all source
 * files in the program, then also delete it here.
 */
/* copyright --> */
#ifndef D_DHT_MESSAGE_FACTORY_H
#define D_DHT_MESSAGE_FACTORY_H

#include "common.h"

#include <string>
#include <vector>

#include "SharedHandle.h"
#include "A2STR.h"
#include "ValueBase.h"

namespace aria2 {

class DHTMessage;
class DHTQueryMessage;
class DHTResponseMessage;
class DHTNode;
class Peer;

class DHTMessageFactory {
public:
  virtual ~DHTMessageFactory() {}

  virtual SharedHandle<DHTQueryMessage>
  createQueryMessage(const Dict* dict,
                     const std::string& ipaddr, uint16_t port) = 0;

  virtual SharedHandle<DHTResponseMessage>
  createResponseMessage(const std::string& messageType,
                        const Dict* dict,
                        const std::string& ipaddr, uint16_t port) = 0;

  virtual SharedHandle<DHTQueryMessage>
  createPingMessage(const SharedHandle<DHTNode>& remoteNode,
                    const std::string& transactionID = A2STR::NIL) = 0;

  virtual SharedHandle<DHTResponseMessage>
  createPingReplyMessage(const SharedHandle<DHTNode>& remoteNode,
                         const unsigned char* id,
                         const std::string& transactionID) = 0;

  virtual SharedHandle<DHTQueryMessage>
  createFindNodeMessage(const SharedHandle<DHTNode>& remoteNode,
                        const unsigned char* targetNodeID,
                        const std::string& transactionID = A2STR::NIL) = 0;

  virtual SharedHandle<DHTResponseMessage>
  createFindNodeReplyMessage
  (const SharedHandle<DHTNode>& remoteNode,
   const std::vector<SharedHandle<DHTNode> >& closestKNodes,
   const std::string& transactionID) = 0;

  virtual SharedHandle<DHTQueryMessage>
  createGetPeersMessage(const SharedHandle<DHTNode>& remoteNode,
                        const unsigned char* infoHash,
                        const std::string& transactionID = A2STR::NIL) = 0;

  virtual SharedHandle<DHTResponseMessage>
  createGetPeersReplyMessage
  (const SharedHandle<DHTNode>& remoteNode,
   const std::vector<SharedHandle<DHTNode> >& closestKNodes,
   const std::vector<SharedHandle<Peer> >& peers,
   const std::string& token,
   const std::string& transactionID) = 0;

  virtual SharedHandle<DHTQueryMessage>
  createAnnouncePeerMessage(const SharedHandle<DHTNode>& remoteNode,
                            const unsigned char* infoHash,
                            uint16_t tcpPort,
                            const std::string& token,
                            const std::string& transactionID = A2STR::NIL) = 0;

  virtual SharedHandle<DHTResponseMessage>
  createAnnouncePeerReplyMessage(const SharedHandle<DHTNode>& remoteNode,
                                 const std::string& transactionID) = 0;

  virtual SharedHandle<DHTMessage>
  createUnknownMessage(const unsigned char* data, size_t length,
                       const std::string& ipaddr, uint16_t port) = 0;
};

} // namespace aria2

#endif // D_DHT_MESSAGE_FACTORY_H
