#include <iostream>
using namespace std;

int main()
{
    int n, n1;
    int tmp;
    int cnt = 0;
    cin >> n;
    n1 = n;
    do
    {
        tmp = (n / 10) + (n % 10);
        n = ((n%10)*10)+(tmp%10);
        cnt++;
    } while (n != n1);

    cout << cnt;
}