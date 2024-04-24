#!/usr/bin/env python3
"""
function measure_time that measures the
total execution time for wait_n
"""
import asyncio
import time

wait_n = __import__("1-concurrent_coroutines").wait_n


def measure_time(n, max_delay):
    """
    function measure_time that measures the
    total execution time for wait_n
    """

    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    return (time.time() - start) / n
