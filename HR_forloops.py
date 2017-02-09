#!/bin/python

import sys


n = int(raw_input().strip())
for i in range(1, 11):
    ans = n * i
    print "{} x {} = {}".format(n, i, ans)
	