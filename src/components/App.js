import React from 'react';
import Profile from './Profile/Profile';
import profile from './Profile/user.json';
// import  Statistics from './Statistics/statistical-data.json';
import statisticalData from './Statistics/statistical-data.json';
import FriendList from './FriendList/FriendList';
import friends from'./FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/Transactions';
import Statistics from './Statistics/Statistics';


const App = () => (
   <>
        <Profile
            name={profile.name}
            tag={profile.tag}
            location={profile.location}
            avatar={profile.avatar}
            stats={profile.stats}
            // followers={profile.stats.followers}
            // views={profile.stats.views}
            // likes={profile.stats.likes}
            />
           
         <Statistics title="Upload stats" stats={statisticalData} />
         <Statistics stats={statisticalData} />
         <FriendList friends={friends} />
         <TransactionHistory items={transactions} />
        </>
    );
    export default App;

