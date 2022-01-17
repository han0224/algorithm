#include <iostream>
using namespace std;

int main(){
    int n;
    char x;
    int result=0;
    cin>>n;
    for(int i=0;i<n;i++){
        cin>>x;
        result +=x - 48;
    }
    cout<<result;
}