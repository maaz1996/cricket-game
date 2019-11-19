from random import randint

overs = input("How many overs? ")


def start(overs):
    balls = overs*6
    print("There will be %d overs and %d balls" % (overs, balls))


start(overs)
