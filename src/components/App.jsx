import { Profile } from "./profile/profile";
import { Statistics } from "./stats/statistics";

import user from './json-data/user.json';
import data from './json-data/data.json';

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
    <Statistics title="Upload stats" stats={data} />;
    </>
    
  );
};
