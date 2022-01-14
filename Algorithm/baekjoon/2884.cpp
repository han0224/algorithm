#include <iostream>
using namespace std;

int main()
{
    int H, M;
    cin >> H >> M;
    M -= 45;
    if (M < 0)
    {
        H--;
        M = 60 + M;
    }
    if(H==-1) H=23;
    cout << H << " " << M;
}