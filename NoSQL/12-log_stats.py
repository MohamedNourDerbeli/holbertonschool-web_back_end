#!/usr/bin/env python3
"""script that provides some stats about Nginx logs"""
from pymongo import MongoClient

list_all = __import__("8-all").list_all
if __name__ == "__main__":
    client = MongoClient("mongodb://127.0.0.1:27017")
    ngix_collection = client.logs.nginx
    logs = ngix_collection.count_documents({})
    print("{} logs".format(logs))
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = ngix_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")
    count = ngix_collection.count_documents({"method": "GET",
                                             "path": "/status"})
    print(f"{count} status check")
