import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import PlusIcon from '../../../components/fundamentals/icons/plus-icon';
import BodyCard from '../../../components/organisms/body-card';
import CustomerGroupsTable from '../../../components/templates/customer-group-table/customer-groups-table';
import CustomersPageTableHeader from '../header';
import CustomerGroupContext, {
  CustomerGroupContextContainer,
} from './context/customer-group-context';
import Details from './details';

/*
 * Customer groups index page
 */
function Index() {
  const { showModal } = useContext(CustomerGroupContext);

  const actions = [
    {
      label: 'New group',
      onClick: showModal,
      icon: (
        <span className="text-grey-90">
          <PlusIcon size={20} />
        </span>
      ),
    },
  ];

  return (
    <div className="flex flex-col grow h-full">
      <div className="w-full flex flex-col grow">
        <BodyCard
          actionables={actions}
          customHeader={<CustomersPageTableHeader activeView="groups" />}
        >
          <CustomerGroupsTable />
        </BodyCard>
      </div>
    </div>
  );
}

/*
 * Customer groups routes
 */
function CustomerGroups() {
  return (
    <CustomerGroupContextContainer>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </CustomerGroupContextContainer>
  );
}

export default CustomerGroups;
