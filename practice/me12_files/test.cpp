#include <bits/stdc++.h>
using namespace std;
#define ll long long
int main(){
    int t; cin>>t;
    while(t--){
        int n,q;
        cin>>n>>q;
        ll arr[n+1];
        ll pref[n+1];
        for(int i=1;i<=n;i++){
            cin>>arr[i];
            pref[i]= pref[i-1]+arr[i];
        }
        
        while(q--){
            int l,r,k; cin>>l>>r>>k;
            ll sum = (r-l+1)*k + (pref[n]-(pref[r]-pref[l-1])) ; 
            cout<<((sum&1)?"YES":"NO") <<endl;
        }
    }
}