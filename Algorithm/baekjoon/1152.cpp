#include <iostream>
using namespace std;

int main()
{
    int count = 1;
    int j = 0, size;
    string n;
    getline(cin, n);
    size = n.size();
    if (n.empty())
    {
        cout << "0";
        return 0;
    }
    for (char i : n)
    {
        if (i == ' ')
            count++;
    }
    if(n[0]==' ') count--;
    if(n[size - 1]==' ') count--;
    cout << count;
}