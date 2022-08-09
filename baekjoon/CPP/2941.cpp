#include <iostream>
#include <string>
using namespace std;

int main(){
    string str;
    string cro[8]={"c=","c-","dz=","d-","lj","nj","s=","z="};
    int cnt, size;
    cin>>str;
    cnt = size = str.size();
    for(int i=0;i<8;i++){
        for(int j=0;j<size;j++){
            if(str.find(cro[i],j)!=string::npos) {
                cnt=cnt-cro[i].size()+1;
                j=str.find(cro[i],j);
                str[j+1]='0';
            }
        }
    }
    cout<<cnt;
}