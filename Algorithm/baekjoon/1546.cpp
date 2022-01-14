#include <iostream>
using namespace std;

int main(){
    int n;
    int max=0;
    double result = 0;
    cin>>n;
    double* ptr = new double[n];
    for(int i=0;i<n;i++){
        cin>>ptr[i];
        if(ptr[i]>max) max= ptr[i];
    }
    for(int i=0;i<n;i++){
        ptr[i]=ptr[i]/(double)max*100;
        result+=ptr[i];
    }
    cout<<result/n;
}