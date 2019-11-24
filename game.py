from random import randint

team1 = input("Enter Team1_")
team2 = input("Enter Team2_")
overs = input("How many overs? ")

balls = int(overs)*6


def start(overs):
    print ("There will be ",overs," overs and ",balls, "balls between ",team1," and ",team2)


start(overs)

for i in range(balls):
    r = randint(1, 6)
    print(r)
