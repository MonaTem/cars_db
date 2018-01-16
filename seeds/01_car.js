
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('formulas').del()
    .then(function () {
      // Inserts seed entries
      return knex('formulas').insert([
        {
          fid:  1,
          english_name: 'Meridian Circulation',
          pinyin_name: 'Du Huo Ji Sheng Tang'
      }
        
      ]);
    });
};
