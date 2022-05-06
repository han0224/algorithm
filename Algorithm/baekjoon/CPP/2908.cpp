#include <iostream>
using namespace std;

int main(){
    int a, b;
    cin>>a>>b;
    int ra=(a%10)*100+((a/10)%10)*10+a/100;
    int rb=(b%10)*100+((b/10)%10)*10+b/100;
    if(ra>rb) cout<< ra;
    else cout<<rb;
}