import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy_to_use.svg').default,
    description: (
      <>
      Antigrind Lua API was designed from the ground up to be easily
      understood and used to get your Lua scripts up and running quickly.
      </>
    ),
  },
  {
    title: 'Modern UI',
    Svg: require('@site/static/img/modern_UI.svg').default,
    description: (
      <>
        With our Lua API you can make use of our Custom Crafted UI,
        or make your whole own UI using our Custom drawing API or by using GTA5 Native API.
      </>
    ),
  },
  {
    title: 'Cloud Services',
    Svg: require('@site/static/img/online_connection.svg').default,
    description: (
      <>
        Antigrind lets you create and share scripts within our Cloud.        
        You can browse one of the many scripts created by our own Community.
      </>
    ),
  },
  {
    title: 'Customizeable',
    Svg: require('@site/static/img/Easy_to_Customize.svg').default,
    description: (
      <>
        Extend or customize your UI layout by using LUA or in menu Options.
      </>
    ),
  },
  {
    title: 'Pedigreed ',
    Svg: require('@site/static/img/code_profes.svg').default,
    description: (
      <>
      Built upon an original and thoughtfully researched codebase,
      Antigrind does not suffer from the bugs and crashes inherited from outdated,
      ancient libraries that presently dominate the industry.
      </>
    ),
  },
  {
    title: 'Round The Clock',
    Svg: require('@site/static/img/fast_loading.svg').default,
    description: (
      <>
      Here at Antigrind we're always continually researching and developing new features for our Lua API.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
