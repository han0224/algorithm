#include <iostream>
using namespace std;

int solution(int num)
{
    int result = num;
    while (num > 0)
    {
        result += num % 10;
        num /= 10;
    }
    return result;
}

int main()
{
    bool index[10001];
    for(int i=0;i<10001;i++) index[i] = true;
    for (int i = 1; i <= 10000; i++)
    {
        int notSelfnum = solution(i);
        if (notSelfnum > 10000) continue;
        index[notSelfnum] = false;
        
    }
    for (int i = 1; i <= 10000; i++)
    {
        if (index[i])
            cout << i << '\n';
    }
}