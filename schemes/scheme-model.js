const db = require('../data/db-config.js');

module.exports = {
    find, 
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}
//functions
function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
    .where({ id })
    .first()
    .then(scheme => {
        if(scheme) {
        return scheme;
        } else {
            return null;
        }
    });
}
/*
select scheme_name, step_number, instructions
from schemes
inner join steps on schemes.id = steps.scheme_id
order by step_number
*/
function findSteps(id) {
    return db('schemes')
    .select('scheme_name', 'step_number', 'instructions')
    .innerJoin('steps', 'schemes.id', 'steps.scheme_id')
    .where({'scheme_id': id })
    .orderBy('step_number');
    
}

async function add(scheme) {
    const [id] = await db('schemes').insert(scheme);
    return findById(id);
    
}

function update(changes, id) {
    return db('schemes')
    .update(changes)
    .where({ id })
    .then(updated => {
        return updated;
    })
}

function remove(id) {
    return db('schemes')
    .where({ id })
    .del()
    .then(del => {
        if (del){
            return del;
        } else {
            return null;
        }
    })
}

/*
    insert into Steps
    values(steps)
    where id = scheme_id
*/
function addStep(step, scheme_id){
    return db('steps')
    .insert(step)
    .where({ 'scheme_id': scheme_id })
}