#!/usr/bin/env python3
"""
 function that returns the list of all the task
"""
import asyncio

task_wait_random = __import__("3-tasks").task_wait_random


async def task_wait_n(n, max_delay):
    """
    return the list of all the task
    """
    delay_list = []
    for i in range(n):
        delay_list.append(task_wait_random(max_delay))
    return [await delay for delay in asyncio.as_completed(delay_list)]
