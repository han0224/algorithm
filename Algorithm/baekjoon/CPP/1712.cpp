#include <iostream>
using namespace std;

int main()
{
    int a, b, c;
    cin>>a>>b>>c;
    int price = a;
    if(b>=c) cout<<-1;
    else cout<<a/(c-b)+1;
}