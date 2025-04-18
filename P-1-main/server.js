require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const proposalSchema = new mongoose.Schema({
  performer: String,
  showTitle: String,
  description: String,
  date: String,
  time: String,
  venue: String,
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  }
});
const Proposal = mongoose.model('Proposal', proposalSchema);

app.post('/api/propose-show', async (req, res) => {
  try {
    const proposal = new Proposal({
      ...req.body,
      performer: 'current-performer', // Hardcoded for now, should be replaced with actual performer ID from auth
      status: 'pending'
    });
    await proposal.save();
    console.log('New proposal created:', proposal);
    res.status(201).json({ message: 'Proposal submitted successfully', proposal });
    
    // Create a test show immediately to ensure data exists
    const testShow = new Proposal({
      performer: 'current-performer',
      showTitle: 'Test Show ' + new Date().toISOString(),
      description: 'This is an automatically created test show',
      date: '2023-12-25',
      time: '21:00',
      venue: 'Test Venue',
      status: 'pending'
    });
    await testShow.save();
    console.log('Auto-created test show:', testShow);
  } catch (err) {
    console.error('Error creating proposal:', err);
    res.status(500).json({ error: 'Failed to submit proposal' });
  }
});

app.get('/api/shows', async (req, res) => {
  try {
    const shows = await Proposal.find();
    console.log('All shows found:', shows.length);
    res.status(200).json(shows);
  } catch (err) {
    console.error('Error fetching all shows:', err);
    res.status(500).json({ error: 'Failed to fetch shows' });
  }
});

app.delete('/api/shows/:id', async (req, res) => {
  try {
    const deletedShow = await Proposal.findByIdAndDelete(req.params.id);
    if (!deletedShow) {
      return res.status(404).json({ error: 'Show not found' });
    }
    res.status(200).json({ message: 'Show deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete show' });
  }
});

app.patch('/api/shows/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const updatedShow = await Proposal.findByIdAndUpdate(
      req.params.id,
      { status: status === 'accepted' ? 'confirmed' : status === 'rejected' ? 'cancelled' : status },
      { new: true }
    );
    if (!updatedShow) {
      return res.status(404).json({ error: 'Show not found' });
    }
    res.status(200).json(updatedShow);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update show status' });
  }
});

app.get('/api/shows/performer/:performer', async (req, res) => {
  try {
    // Fetch shows for the specified performer
    const shows = await Proposal.find({ 
      performer: req.params.performer
    });
    // console.log('Performer shows found:', shows.length);
    res.status(200).json(shows);
  } catch (err) {
    console.error('Error fetching performer shows:', err);
    res.status(500).json({ error: 'Failed to fetch performer shows' });
  }
});

// Add a test endpoint to create sample data
app.post('/api/test/create-sample-data', async (req, res) => {
  try {
    // Clear existing data
    await Proposal.deleteMany({});
    
    // Create sample proposals
    const sampleProposals = [
      {
        performer: 'current-performer',
        showTitle: 'Comedy Night Special',
        description: 'A hilarious night of standup comedy',
        date: '2023-12-15',
        time: '20:00',
        venue: 'The Laughing Plot',
        status: 'pending'
      },
      {
        performer: 'current-performer',
        showTitle: 'Improv Showcase',
        description: 'Watch the best improvisers in town',
        date: '2023-12-20',
        time: '19:30',
        venue: 'Comedy Cellar',
        status: 'confirmed'
      },
      {
        performer: 'other-performer',
        showTitle: 'Open Mic Night',
        description: 'New talent showcase',
        date: '2023-12-10',
        time: '18:00',
        venue: 'Chuckles Comedy Club',
        status: 'pending'
      }
    ];
    
    await Proposal.insertMany(sampleProposals);
    console.log('Sample data created successfully');
    res.status(200).json({ message: 'Sample data created successfully', count: sampleProposals.length });
  } catch (err) {
    console.error('Error creating sample data:', err);
    res.status(500).json({ error: 'Failed to create sample data' });
  }
});

// Add a simple test endpoint to create a single show
app.get('/api/test/create-show', async (req, res) => {
  try {
    const newShow = new Proposal({
      performer: 'current-performer',
      showTitle: 'Test Show',
      description: 'This is a test show',
      date: '2023-12-25',
      time: '21:00',
      venue: 'Test Venue',
      status: 'pending'
    });
    
    await newShow.save();
    console.log('Test show created successfully');
    res.status(200).json({ message: 'Test show created successfully', show: newShow });
  } catch (err) {
    console.error('Error creating test show:', err);
    res.status(500).json({ error: 'Failed to create test show' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));