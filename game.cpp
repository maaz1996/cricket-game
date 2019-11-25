#include <bits/stdc++.h>
using namespace std;
class Game
{
public:
	int x, y;
};
//function based on class Game
Game score(int balls)
{
	//declare a class named Game and Object g
	Game g;
	int runs = 0;
	int wickets = 0;
	for (int i = 0; i < balls; i++)
	{ //generating a random no. from 1 to 6
		int r = 1 + rand() % 5;
		//wicket falls as random generates number 5; rest adds up the runs part
		if (r == 5 && wickets < 10)
		{
			runs = 0 + runs;
			wickets = wickets + 1;
		}
		else if (r != 5 && wickets < 10)
		{
			runs = r + runs;
		}
		else if (r == 5 && wickets >= 10)
		{
			runs = 0 + runs;
		}
		else if (r == 5 && wickets >= 10)
		{
			runs = 0 + runs;
		}
	}
	g.x = runs;
	g.y = wickets;
	return g;
}
//driver function
int main()
{
	//defining a variable for Class Game to access the values of function
	Game varteam1, varteam2;
	string team1, team2;
	cout << "Select team1_";
	cin >> team1;
	cout << "Select team2_";
	cin >> team2;
	int overs;
	cout << "Enter the no. of Overs to be Played in this Match between " << team1 << " and " << team2 << endl;
	cin >> overs;
	int balls = overs * 6;
	cout << "There will be " << overs << " overs and " << balls << " balls in the Match between " << team1 << " and " << team2 << endl;
	//Game class calling on function scores for team1 & team2
	varteam1 = score(balls);
	varteam2 = score(balls);
	cout << "Final Score of " << team1 << "= " << varteam1.x << "/" << varteam1.y << endl;
	cout << "Final Score of " << team2 << "= " << varteam2.x << "/" << varteam2.y << endl;
	//comparisons of scores of both teams; difference of winning runs
	if (varteam1.x > varteam2.x)
	{
		cout << team1 << " Won by " << varteam1.x - varteam2.x << " runs" << endl;
	}
	else if (varteam1.x < varteam2.x)
	{
		cout << team2 << " Won by " << varteam2.x - varteam1.x << " runs" << endl;
	}
	else if (varteam1.x > varteam2.x)
	{
		cout << "Match tied between " << team1 << " and " << team2 << endl;
	}
	return 0;
}
