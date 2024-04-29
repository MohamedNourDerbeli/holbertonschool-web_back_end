#!/usr/bin/env python3
"""0-simple_helper_function"""


def index_range(page, page_size):
    """Return the tuple of start and end indices"""
    # Calculate the start index
    start_index = (page - 1) * page_size
    # Calculate the end index
    end_index = start_index + page_size
    # Return the tuple of start and end indices
    return (start_index, end_index)
