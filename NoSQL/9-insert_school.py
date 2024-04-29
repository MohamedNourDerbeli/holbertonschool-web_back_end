#!/usr/bin/env python3
"""
    Insert a new document in a collection based on kwargs
"""


def insert_school(mongo_collection, **kwargs):
    """
    Insert a new document in a collection based on kwargs
    """
    mongo_collection.insert_one(kwargs)
    return mongo_collection.inserted_id
