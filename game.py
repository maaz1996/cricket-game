from random import randint

team1 = input("Enter Team1_")
team2 = input("Enter Team2_")
overs = input("How many overs? ")

balls = int(overs)*6


def start(overs):
    print("There will be ", overs, " overs and ", balls,
          "balls between ", team1, " and ", team2)


start(overs)


def score(balls):
    runs = 0
    wickets = 0
    for i in range(balls):
        r = randint(1, 6)
        if (r == 5 and wickets < 10):
            runs = 0 + runs
            wickets = wickets + 1
        elif (r != 5 and wickets < 10):
            runs = r + runs
        elif (r == 5 and wickets >= 10):
            runs = 0 + runs
        elif (r == 5 and wickets >= 10):
            runs = 0 + runs
    print("total runs are", runs)
    print("wickets lost ", wickets)
    return runs
