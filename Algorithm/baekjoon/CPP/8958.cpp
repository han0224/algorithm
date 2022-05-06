#include <iostream>
using namespace std;

int main()
{
    int j, result, n;
    int ptr[80] = {
        0,
    };
    string x;
    cin >> n;
    cin.ignore();
    for (int i = 0; i < n; i++)
    {
        getline(cin, x);
        j = 0;
        result = 0;
        for (char a : x) {
            if (a == 'X') ptr[j] = 0;
            else {
                if (j == 0)
                    ptr[0] = 1;
                else {
                    ptr[j] = ptr[j - 1] + 1;
                }
            }
            result += ptr[j];
            j++;
        }
        cout << result << '\n';
    }
}