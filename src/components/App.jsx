import { Profile } from "./profile/profile";
import { Statistics } from "./stats/statistics";
import { Friends } from "./friendsList/friendsList";
import { Transactions } from "./transactions/transactions";

import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

export const App = () => {
  return (
    <>
      <Profile 
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <Transactions items={transactions} />
    </>
    
  );
};
