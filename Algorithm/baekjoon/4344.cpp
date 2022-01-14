#include <iostream>
using namespace std;

int main(){
    cout<<fixed;
    cout.precision(3);
    int c, n, r;
    int sum=0, p=0;
    cin>>c;
    for(int i=0;i<c;i++){
        cin>>n;
        sum=0;
        p=0;
        int* ptr = new int[n];
        for(int j=0;j<n;j++){
            cin>>ptr[j];
            sum+=ptr[j];
        }
        r = sum/n;
        for(int j=0;j<n;j++){
            if(ptr[j]>r)
                p++;
        }
        cout<<((double)p/n)*100<<"%\n";
        free(ptr);
    }
}