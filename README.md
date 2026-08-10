# ShardFS

ShardFS is a distributed file storage system designed to provide reliable and fault-tolerant file storage across multiple independent storage nodes.

Instead of storing files on a single server, ShardFS distributes file data across multiple nodes and uses replication to maintain availability when individual nodes become unavailable.

The project is built to explore real-world distributed systems concepts such as file chunking, replication, node health monitoring, fault tolerance, metadata management, and horizontal storage scaling.

## Tech Stack

- React.js
- TypeScript
- Tailwind CSS
- FastAPI
- Python
- MongoDB
- Docker
- REST APIs

## Core Features

- Distributed file storage
- File chunking and distribution
- Configurable data replication
- Storage node management
- Node health monitoring
- Fault-tolerant file retrieval
- File integrity verification
- Authentication and authorization
- Storage usage monitoring
- Horizontal node expansion
- RESTful API architecture

## Architecture

The system consists of a central coordinator and multiple independent storage nodes.

```text
                    ┌─────────────────┐
                    │   React Client  │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   FastAPI API   │
                    │   Coordinator   │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
        ┌──────────┐   ┌──────────┐   ┌──────────┐
        │ Storage  │   │ Storage  │   │ Storage  │
        │  Node 01 │   │  Node 02 │   │  Node 03 │
        └──────────┘   └──────────┘   └──────────┘
