import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox';
import React from 'react'

const Home = () => {
  const loggedIn= {firstName: "Avikal", lastName: "Gupta", email:"avikal.gupta@gmail.com"};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account with transactions efficiently."

          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250000027628.78}
          />
          
        </header>

        RECENT TRANSACTIONS

      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{},{}]}
      />

    </section>
  )
}

export default Home;