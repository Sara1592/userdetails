
// 'use client';
// import { useState } from "react";
// import AddNewUser from "./components/AddNewUser";
// import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";

// export default function Home() {
//   const [showModal, setShowModal] = useState(false);
 
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   type User = {
//   name: string;
//   email: string;
//   phone: string;
//   dob: string;
//   country: string;
// };

// const [users, setUsers] = useState<User[]>([]);

// const handleAddUser = (newUser: User) => {
//   setUsers((prevUsers) => [...prevUsers, newUser]);
//   closeModal();
// };

// const [editingUserIndex, setEditingUserIndex] = useState<number | null>(null);

// const handleEdit = (index: number) => {
//   setEditingUserIndex(index);
//   setShowModal(true);
//   console.log("Edit user at index", index);
// };

// const handleAddOrEditUser = (user: User) => {
//   if (editingUserIndex !== null) {
//     setUsers((prevUsers) =>
//       prevUsers.map((u, i) => (i === editingUserIndex ? user : u))
//     );
//   } else {
//     setUsers((prevUsers) => [...prevUsers, user]);
//   }

//   closeModal();
//   setEditingUserIndex(null);
// };

// const handleDelete = (index: number) => {
//   setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
// };

//   return (
//     <div>
//       <main className="min-h-screen bg-[#0e2766] flex flex-col items-center justify-center p-4">
//         <h1 className="text-yellow-400 text-[34px] font-bold mb-4 text-center">
//           User Details
//         </h1>
//         <button
//           onClick={openModal}
//           className="bg-yellow-400 hover:bg-zinc-50 text-[#0e2766] text-[24px] font-bold py-2 px-6 rounded-md mb-6 cursor-pointer"
//         >
//           Add New User
//         </button>

//         <div className="bg-[#fdf4f4] w-full h-170 max-w-6xl rounded-xl shadow-md overflow-x-auto">
//           <table className="min-w-full text-sm text-left text-gray-700">
//             <thead className="text-[18px] font-semibold border-b border-gray-300">
//               <tr className="text-center">
//                 <th className="px-4 py-3">Sl.No</th>
//                 <th className="px-4 py-3">Name</th>
//                 <th className="px-4 py-3">Email</th>
//                 <th className="px-4 py-3">Phone No</th>
//                 <th className="px-4 py-3">Date of Birth</th>
//                 <th className="px-4 py-3">Country</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.length === 0 ? (
//                 <tr>
//                   <td className="px-4 py-3 text-center text-[18px]" colSpan={6}>
//                     No users available
//                   </td>
//                 </tr>
//               ) : (
//                 users.map((user, index) => (
//                   <tr key={index} className="text-center text-[18px]">
//                     <td className="px-4 py-2">{index + 1}</td>
//                     <td className="px-4 py-2">{user.name}</td>
//                     <td className="px-4 py-2">{user.email}</td>
//                     <td className="px-4 py-2">{user.phone}</td>
//                     <td className="px-4 py-2">{user.dob}</td>
//                     <td className="px-4 py-2">{user.country}</td>
//                     <td className="px-2 py-2">
//     <button
//       className="p-1 rounded-md bg-green-100 hover:bg-green-200"
//       onClick={() => handleEdit(index)}
//     >
//       <PencilSquareIcon className="h-6 w-6 text-green-600" />
//     </button>
//   </td>
  
//   <td className="px-2 py-2">
//     <button
//       className="p-1 rounded-md bg-red-500 hover:bg-red-600"
//       onClick={() => handleDelete(index)}
//     >
//       <XMarkIcon className="h-6 w-6 text-white" />
//     </button>
//   </td>

//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </main>

//       {showModal && <AddNewUser
//     onClose={closeModal}
//     onAddUser={handleAddOrEditUser}
//     editingUser={editingUserIndex !== null ? users[editingUserIndex] : null}
//   />}
//     </div>
//   );
// }


import DynamicForm from "./components/DynamicForm";
export default function Home() {
  return <DynamicForm />;
}