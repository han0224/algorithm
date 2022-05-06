#include <iostream>
using namespace std;

int main()
{
    int t, r, s;
    string str;
    cin >> t;
    for(int i=0;i<t;i++){
        cin>>r;
        cin.ignore();
        getline(cin, str);
        for(char c:str){
            for(int j=0;j<r;j++){
                cout<<c;
            }
        }
        cout<<'\n';
    }
}