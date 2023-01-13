import ReactGA from 'react-ga';

const useAnalyticsEventTracker = (category = 'Contact') => {
  const eventTracker = (action = 'connect action', label = 'connect label') => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
export default useAnalyticsEventTracker;
