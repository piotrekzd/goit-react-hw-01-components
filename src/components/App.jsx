import { Profile } from "./profile/profile";
import { Statistics } from "./stats/statistics";
import { Friends } from "./friendsList/friendsList";

import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';

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
      
    </>
    
  );
};
