#!/usr/bin/env python3
"""This function updates the topics of a document"""


def update_topics(mongo_collection, name, topics):
    """This function updates the topics of a document"""

    name = {"name": name}
    newvalues = {"$set": {"topics": topics}}
    mongo_collection.update_many(name, newvalues)
