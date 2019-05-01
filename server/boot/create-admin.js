'use strict';

module.exports = app => {
  // const { Member, Role, RoleMapping } = app.models;

  // Member.findOrCreate(
  //   {
  //     where: {
  //       'steamName': process.env.STEAM_NAME,
  //     },
  //   },
  //   {
  //     'steamName': process.env.STEAM_NAME,
  //     'steamId': process.env.STEAM_ID
  //   },
  //   (err, member) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     Role.findOrCreate(
  //       {
  //         where: {
  //           'name': 'admin',
  //         },
  //       },
  //       {
  //         'name': 'admin',
  //       },
  //       (err) => {
  //         if (err) {
  //           console.log(err);
  //           return;
  //         }
  //         RoleMapping.findOrCreate(
  //           {
  //             where: {
  //               principalType: 'admin',
  //               principalId: member.id,
  //             },
  //           },
  //           {
  //             principalType: 'admin',
  //             principalId: member.id,
  //           },
  //           (err) => {
  //             if (err) {
  //               console.log(err);
  //               return;
  //             }
  //           }
  //         );
  //       }
  //     );
  //   }
  // );
};
