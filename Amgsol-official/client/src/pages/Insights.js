import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogData } from '../data/blogData';
import './Insights.css';

const Insights = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogs, setBlogs] = useState(blogData);
  const [showAddBlogForm, setShowAddBlogForm] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    author: 'American Green Solutions',
    category: 'Solar Energy',
    date: new Date().toISOString().split('T')[0],
    preview: '',
    content: '',
    image: 'blog1.jpeg'
  });

  // Import blog images
  const getImagePath = (imageName) => {
    try {
      return require(`../assets/${imageName}`);
    } catch (error) {
      return require('../assets/blog1.jpeg'); // fallback image
    }
  };

  // Filter and sort blogs based on search criteria
  const filteredBlogs = useMemo(() => {
    let filtered = blogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.preview.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDate = !dateFilter || blog.date.includes(dateFilter);
      return matchesSearch && matchesDate;
    });

    // Sort blogs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        case 'latest':
          return new Date(b.date) - new Date(a.date);
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });

    return filtered;
  }, [searchTerm, dateFilter, sortBy, blogs]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const openBlogModal = (blog) => {
    setSelectedBlog(blog);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeBlogModal = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const addComment = (blogId, commentText) => {
    if (!commentText.trim()) return;
    
    const newComment = {
      author: 'Anonymous User',
      text: commentText,
      date: new Date().toLocaleDateString()
    };
    
    setBlogs(prevBlogs => 
      prevBlogs.map(blog => 
        blog.id === blogId 
          ? { ...blog, comments: [...blog.comments, newComment] }
          : blog
      )
    );
  };

  const toggleLike = (blogId) => {
    setBlogs(prevBlogs => 
      prevBlogs.map(blog => 
        blog.id === blogId 
          ? { ...blog, likes: blog.likes + 1 }
          : blog
      )
    );
  };

  const addNewBlog = () => {
    if (!newBlog.title.trim() || !newBlog.preview.trim()) {
      alert('Please fill in title and preview');
      return;
    }

    const blogToAdd = {
      id: Math.max(...blogs.map(b => b.id)) + 1,
      title: newBlog.title,
      date: newBlog.date,
      author: newBlog.author,
      category: newBlog.category,
      image: newBlog.image,
      preview: newBlog.preview,
      content: newBlog.content || `<h2>${newBlog.title}</h2><p>${newBlog.preview}</p>`,
      comments: [],
      likes: 0
    };

    setBlogs(prevBlogs => [blogToAdd, ...prevBlogs]);
    setNewBlog({
      title: '',
      author: 'American Green Solutions',
      category: 'Solar Energy',
      date: new Date().toISOString().split('T')[0],
      preview: '',
      content: '',
      image: 'blog1.jpeg'
    });
    setShowAddBlogForm(false);
  };

  const deleteBlog = (blogId) => {
    const firstConfirm = window.confirm('Are you sure you want to delete this blog post?');
    if (firstConfirm) {
      const secondConfirm = window.confirm('This action cannot be undone. Do you really want to remove this blog post permanently?');
      if (secondConfirm) {
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== blogId));
        if (selectedBlog && selectedBlog.id === blogId) {
          setSelectedBlog(null);
        }
      }
    }
  };

  const handleEmailShare = (blog) => {
    const subject = encodeURIComponent(`Check out this article: ${blog.title}`);
    const body = encodeURIComponent(`I thought you might be interested in this article:\n\n${blog.title}\n\n${blog.preview}\n\nRead more at: ${window.location.origin}/insights`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  const handleCopyLink = (blog) => {
    const url = `${window.location.origin}/insights#blog-${blog.id}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Link copied to clipboard!');
    });
  };

  const handleSocialShare = (blog) => {
    const url = encodeURIComponent(`${window.location.origin}/insights#blog-${blog.id}`);
    const text = encodeURIComponent(`Check out this article: ${blog.title}`);
    
    // Try to use Web Share API if available
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.preview,
        url: `${window.location.origin}/insights#blog-${blog.id}`
      });
    } else {
      // Fallback to Twitter share
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    }
  };

  return (
    <motion.div 
      className="insights-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header Section */}
      <div className="insights-header">
        <h1>Insights & <span className="highlight">Blogs</span></h1>
        <p>Stay updated with the latest trends and innovations in renewable energy and solar solutions</p>
      </div>

      {/* Search and Filter Controls */}
      <div className="filter-controls">
        <div className="search-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by name or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>

        <div className="filter-options">
          <div className="filter-item">
            <label>Search by Date:</label>
            <input
              type="month"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="date-filter"
            />
          </div>

          <div className="filter-item">
            <label>Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="latest">Latest to Oldest</option>
              <option value="oldest">Oldest to Latest</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Blog Grid - 3 per row */}
      <div className="blog-grid">
        {filteredBlogs.map((blog) => (
          <motion.div 
            key={blog.id} 
            className="blog-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <div className="blog-header">
              <div className="blog-date">{formatDate(blog.date)}</div>
              <h3 className="blog-title">{blog.title}</h3>
            </div>
            
            <div className="blog-image">
              <img src={getImagePath(blog.image)} alt={blog.title} />
            </div>
            
            <div className="blog-content">
              <p className="blog-excerpt">
                {blog.preview.substring(0, 120)}...
              </p>
              
              <div className="blog-actions">
                <div className="action-buttons">
                  <button 
                    className="read-more-btn"
                    onClick={() => openBlogModal(blog)}
                  >
                    Read More
                  </button>
                  <button 
                    className="delete-btn"
                    onClick={() => deleteBlog(blog.id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
                <div className="blog-stats">
                  <button 
                    className="like-btn"
                    onClick={() => toggleLike(blog.id)}
                  >
                    ❤️ {blog.likes}
                  </button>
                  <span className="comment-count">💬 {blog.comments.length}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div className="no-results">
          <p>No blogs found matching your search criteria.</p>
          <button onClick={() => {
            setSearchTerm('');
            setDateFilter('');
            setSortBy('latest');
          }}>
            Clear Filters
          </button>
        </div>
      )}

      {/* Add New Blog Button */}
      <div className="add-blog-section">
        <button 
          className="add-blog-btn"
          onClick={() => setShowAddBlogForm(true)}
        >
          ➕ Add New Blog
        </button>
      </div>

      {/* Add Blog Form Modal */}
      {showAddBlogForm && (
        <div className="blog-modal-overlay" onClick={() => setShowAddBlogForm(false)}>
          <motion.div 
            className="blog-modal add-blog-modal" 
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="modal-header">
              <h2>Add New Blog Post</h2>
              <button className="close-btn" onClick={() => setShowAddBlogForm(false)}>×</button>
            </div>
            
            <div className="modal-content">
              <div className="add-blog-form">
                <div className="form-group">
                  <label>Title *</label>
                  <input
                    type="text"
                    value={newBlog.title}
                    onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                    placeholder="Enter blog title"
                  />
                </div>
                
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    value={newBlog.date}
                    onChange={(e) => setNewBlog({...newBlog, date: e.target.value})}
                  />
                </div>
                
                <div className="form-group">
                  <label>Author</label>
                  <input
                    type="text"
                    value={newBlog.author}
                    onChange={(e) => setNewBlog({...newBlog, author: e.target.value})}
                    placeholder="Author name"
                  />
                </div>
                
                <div className="form-group">
                  <label>Category</label>
                  <select
                    value={newBlog.category}
                    onChange={(e) => setNewBlog({...newBlog, category: e.target.value})}
                  >
                    <option value="Solar Energy">Solar Energy</option>
                    <option value="Renewable Energy">Renewable Energy</option>
                    <option value="Technology">Technology</option>
                    <option value="Sustainability">Sustainability</option>
                    <option value="Future Technology">Future Technology</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Image</label>
                  <select
                    value={newBlog.image}
                    onChange={(e) => setNewBlog({...newBlog, image: e.target.value})}
                  >
                    <option value="blog1.jpeg">Blog Image 1</option>
                    <option value="blog2.jpeg">Blog Image 2</option>
                    <option value="blog3.jpeg">Blog Image 3</option>
                    <option value="blog4.jpeg">Blog Image 4</option>
                    <option value="blog5.jpeg">Blog Image 5</option>
                    <option value="blog6.jpeg">Blog Image 6</option>
                    <option value="blog7.jpeg">Blog Image 7</option>
                    <option value="blog8.jpeg">Blog Image 8</option>
                    <option value="blog9.jpeg">Blog Image 9</option>
                    <option value="blog10.jpeg">Blog Image 10</option>
                    <option value="blog11.jpeg">Blog Image 11</option>
                    <option value="blog12.jpeg">Blog Image 12</option>
                    <option value="blog13.jpeg">Blog Image 13</option>
                    <option value="blog14.jpeg">Blog Image 14</option>
                    <option value="blog15.jpeg">Blog Image 15</option>
                    <option value="blog16.jpeg">Blog Image 16</option>
                    <option value="blog17.jpeg">Blog Image 17</option>
                    <option value="blog18.jpeg">Blog Image 18</option>
                    <option value="blog19.jpeg">Blog Image 19</option>
                    <option value="blog20.jpeg">Blog Image 20</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Preview *</label>
                  <textarea
                    value={newBlog.preview}
                    onChange={(e) => setNewBlog({...newBlog, preview: e.target.value})}
                    placeholder="Brief description of the blog post"
                    rows="3"
                  />
                </div>
                
                <div className="form-group">
                  <label>Content (Optional)</label>
                  <textarea
                    value={newBlog.content}
                    onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
                    placeholder="Full blog content (HTML supported)"
                    rows="6"
                  />
                </div>
                
                <div className="form-actions">
                  <button className="cancel-btn" onClick={() => setShowAddBlogForm(false)}>
                    Cancel
                  </button>
                  <button className="submit-btn" onClick={addNewBlog}>
                    Add Blog
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="blog-modal-overlay" onClick={closeBlogModal}>
          <motion.div 
            className="blog-modal" 
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="modal-header">
              <h2>{selectedBlog.title}</h2>
              <button className="close-btn" onClick={closeBlogModal}>×</button>
            </div>
            
            <div className="modal-content">
              <div className="modal-meta">
                <span className="modal-date">{formatDate(selectedBlog.date)}</span>
                <span className="modal-author">By {selectedBlog.author}</span>
                <span className="modal-category">{selectedBlog.category}</span>
              </div>
              
              <div className="modal-image">
                <img src={getImagePath(selectedBlog.image)} alt={selectedBlog.title} />
              </div>
              
              <div className="modal-text">
                <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
              </div>
              
              <div className="modal-footer">
                <div className="social-share">
                  <span>Share this article:</span>
                  <button className="share-btn" onClick={() => handleEmailShare(selectedBlog)}>📧 Email</button>
                  <button className="share-btn" onClick={() => handleCopyLink(selectedBlog)}>🔗 Copy Link</button>
                  <button className="share-btn" onClick={() => handleSocialShare(selectedBlog)}>📱 Social Media</button>
                </div>
                
                <div className="comments-section">
                  <h4>Comments ({selectedBlog.comments.length})</h4>
                  <div className="comment-form">
                    <textarea 
                      id={`comment-${selectedBlog.id}`}
                      placeholder="Add your comment..." 
                      rows="3"
                    ></textarea>
                    <button 
                      className="submit-comment"
                      onClick={() => {
                        const textarea = document.getElementById(`comment-${selectedBlog.id}`);
                        const commentText = textarea.value;
                        if (commentText.trim()) {
                          addComment(selectedBlog.id, commentText);
                          textarea.value = '';
                          // Update selected blog to reflect new comment
                          const updatedBlog = blogs.find(b => b.id === selectedBlog.id);
                          if (updatedBlog) {
                            setSelectedBlog(updatedBlog);
                          }
                        }
                      }}
                    >
                      Post Comment
                    </button>
                  </div>
                  
                  <div className="comments-list">
                    {selectedBlog.comments.length === 0 ? (
                      <p className="no-comments">Be the first to comment!</p>
                    ) : (
                      selectedBlog.comments.map((comment, index) => (
                        <div key={index} className="comment">
                          <strong>{comment.author}</strong>
                          <span className="comment-date">{comment.date}</span>
                          <p>{comment.text}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Insights;