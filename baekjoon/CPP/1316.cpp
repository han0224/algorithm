#include <iostream>
#include <string>
using namespace std;

int main(){
    int n, cnt;
    cin>>n;
    cnt = n;
    string str[n];
    for(int i=0;i<n;i++){
        cin>>str[i];
    }
    for(int i=0;i<n;i++){
        for(int j=0;j<str[i].size()-1;j++){
            if(str[i][j]==str[i][j+1]) continue;
            else if(str[i].find(str[i][j],j+1)!=string::npos){
                    cnt--;
                    break;
            }
        }
    }
    cout<<cnt;
}