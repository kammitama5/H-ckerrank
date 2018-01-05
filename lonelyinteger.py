def lonelyinteger(a):
    # Complete this function
    arr = []
    for i in a:
        if a.count(i) == 1:
            arr.append(i)
    return arr[0]
	