#include <iostream>
using namespace std;

int main(){
    int n, result=1;
    cin>>n;
    for(int i=2;i<=n;i++){
        result+=i;
    }
    cout<<result;
}