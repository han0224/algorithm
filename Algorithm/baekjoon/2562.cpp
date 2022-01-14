#include <iostream>
using namespace std;

int main()
{
    int max = -1;
    int n, index;
    for (int i = 0; i < 9; i++)
    {
        cin >> n;
        if (n > max)
        {
            max = n;
            index = i + 1;
        }
    }
    cout<<max<<endl<<index;
}