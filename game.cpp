#include <bits/stdc++.h>
using namespace std;

int main()
{
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
	int runs = 0;
	int wickets = 0;

	for (int i = 0; i < balls; i++)
	{ //generating a random no. from 1 to 6
		int r = 1 + rand() % 5;
		cout << r << endl;
	}
	return 0;
}