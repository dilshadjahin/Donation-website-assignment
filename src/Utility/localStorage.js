const getStoredDonateApplication = () =>{
    const storedDonateApplication = localStorage.getItem('donate-applications');
    if (storedDonateApplication){
        return JSON.parse(storedDonateApplication);
    }
    return [];

}

const saveDonateApplication = id =>{

    const storedDonateApplications = getStoredDonateApplication();
    const exists = storedDonateApplications.find(donateId  => donateId === id);
    if (!exists){
        storedDonateApplications.push(id);
        try {
            localStorage.setItem('donate-applications', JSON.stringify(storedDonateApplications));
          } catch (error) {
            console.error('Error saving donate applications to localStorage:', error);
          }
          
        // localStorage.setItem('donate-applications', JSON.stringify(storedDonateApplications))
    }
    console.log(storedDonateApplications);

}

export {getStoredDonateApplication, saveDonateApplication}